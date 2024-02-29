import UserProfileForm from "@/forms/UserProfile";
import { useState } from "react";

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  function onSave() {
    setIsLoading(true)
  }

  return <UserProfileForm onSave={onSave} isLoading={isLoading} />;
}
