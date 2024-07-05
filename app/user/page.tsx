import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";

const UserPage = async () => {
	const supabase = createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect("/login");
	}

	return <p>Hello {data.user.email}</p>;
};

export default UserPage;
