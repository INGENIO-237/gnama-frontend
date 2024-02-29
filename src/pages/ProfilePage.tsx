import { useGetUser, useUpdateUser } from "@/api/data/users";
import UserProfileForm from "@/forms/UserProfile";

export default function ProfilePage() {
  const { currentUser, isLoading: isLoadingUser } = useGetUser();
  const { updateUser, isLoading } = useUpdateUser();

  return isLoadingUser ? (
    <span>Loading...</span>
  ) : (
    <UserProfileForm onSave={updateUser} isLoading={isLoading} currentUser={currentUser} />
  );
}
