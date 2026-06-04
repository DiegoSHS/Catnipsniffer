import { useState } from "react";
import { Button, Input, TextArea } from "@heroui/react";
import { updateProfile } from "../features/profile";
import { SectionTitle } from "../components/SectionTitle";

interface EditPageProps {
    onNavigateToView: () => void;
}

interface ProfileData {
    name: string;
    bio: string;
    animatedIconsPrice: number;
    customPonyPriceNoRefSheet: number;
    customPonyPriceWithRefSheet: number;
    fullbodyServices: string;
    headshotServices: string;
    donts: string;
    payment: string;
}

export function EditPage({ onNavigateToView }: EditPageProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const [profileData, setProfileData] = useState<ProfileData>({
        name: "Catnipsniffer",
        bio: "Digital artist specializing in pony and furry art",
        animatedIconsPrice: 30,
        customPonyPriceNoRefSheet: 35,
        customPonyPriceWithRefSheet: 55,
        fullbodyServices: "Shaded pony: 30€\nShaded human/furry: 40€\nSketch furry/anthro/human (with colors): 25€\nSketch pony/feral/furry (with colors): 20€",
        headshotServices: "Sketch (pony/human/furry) with simple colors: 10€\nShaded pony: 15€\nShaded furry: 20€\nShaded human: 20€",
        donts: "Complex landscapes\nExtreme gore\nExtremely muscular characters",
        payment: "PayPal only",
    });

    const handleChange = (field: keyof ProfileData, value: string | number) => {
        setProfileData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const result = await updateProfile("default", profileData);

            if (result.error) {
                setError(result.error);
            } else {
                setSuccess(true);
                setTimeout(() => {
                    onNavigateToView();
                }, 1500);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to save profile");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center pt-16 pb-4 px-4">
            <div className="flex items-center gap-4 mb-8 w-full max-w-4xl">
                <SectionTitle title="Edit Profile" />
                <button
                    onClick={onNavigateToView}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                    Cancel
                </button>
            </div>

            <div className="w-full max-w-4xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-8 shadow-lg">
                {error && (
                    <div className="mb-4 p-4 bg-red-500/10 border border-red-500 rounded text-red-500">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mb-4 p-4 bg-green-500/10 border border-green-500 rounded text-green-500">
                        Profile updated successfully! Redirecting...
                    </div>
                )}

                <div className="space-y-6">
                    {/* Basic Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Basic Information</h3>
                        <div className="space-y-4">
                            <Input
                                value={profileData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                placeholder="Your name"
                                className="w-full"
                            />
                            <TextArea
                                value={profileData.bio}
                                onChange={(e) => handleChange("bio", e.target.value)}
                                placeholder="Your bio"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Pricing */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Pricing</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                type="number"
                                value={profileData.animatedIconsPrice.toString()}
                                onChange={(e) => handleChange("animatedIconsPrice", parseInt(e.target.value) || 0)}
                                placeholder="30"
                            />
                            <Input
                                type="number"
                                value={profileData.customPonyPriceNoRefSheet.toString()}
                                onChange={(e) => handleChange("customPonyPriceNoRefSheet", parseInt(e.target.value) || 0)}
                                placeholder="35"
                            />
                            <Input
                                type="number"
                                value={profileData.customPonyPriceWithRefSheet.toString()}
                                onChange={(e) => handleChange("customPonyPriceWithRefSheet", parseInt(e.target.value) || 0)}
                                placeholder="55"
                            />
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <div className="space-y-4">
                            <TextArea
                                value={profileData.fullbodyServices}
                                onChange={(e) => handleChange("fullbodyServices", e.target.value)}
                                placeholder="List each service per line"
                                rows={4}
                            />
                            <TextArea
                                value={profileData.headshotServices}
                                onChange={(e) => handleChange("headshotServices", e.target.value)}
                                placeholder="List each service per line"
                                rows={4}
                            />
                        </div>
                    </div>

                    {/* Don'ts */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">What I Don't Do</h3>
                        <TextArea
                            value={profileData.donts}
                            onChange={(e) => handleChange("donts", e.target.value)}
                            placeholder="List each item per line"
                            rows={3}
                        />
                    </div>

                    {/* Payment */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Payment Info</h3>
                        <Input
                            value={profileData.payment}
                            onChange={(e) => handleChange("payment", e.target.value)}
                            placeholder="Payment methods"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-6">
                        <Button
                            onClick={handleSave}
                            isDisabled={loading}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold"
                        >
                            {loading ? "Saving..." : "Save Changes"}
                        </Button>
                        <Button
                            onClick={onNavigateToView}
                            isDisabled={loading}
                            className="bg-gray-600 hover:bg-gray-700 text-white font-bold"
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
