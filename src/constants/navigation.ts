export const navigation = {
    MAIN: "/",
    ADD: "/add",
    EDIT: "/edit/:id",
    generateEditPath(id: string) {
        return this.EDIT.replace(":id", id);
    }
}