import del from "del";

const clean = () => del(["./build/**", "!./build"]);

export default clean;
