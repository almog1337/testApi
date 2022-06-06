import { User } from "./user";

export async function getAll() {
    return await User.find({});
}

export async function addUser(username: string) {
    const newUser = new User({name: username});
    return await newUser.save();
}

export async function deleteUser(username: string) {
    return await User.deleteOne({name: username});
}