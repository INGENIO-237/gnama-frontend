import { useUpdateUser } from "@/api/data/users";
import UserProfileForm from "@/forms/UserProfile";

export default function ProfilePage() {
  const { updateUser, isLoading } = useUpdateUser();

  return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
}
