import { gradelist } from "./gradelist";

export interface StudentInfo {
    username?: string | null;
    fullName?: string | null;
    address?: string | null;
    grade?: gradelist | null;
}