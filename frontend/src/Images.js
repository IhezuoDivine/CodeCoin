const imageModules = import.meta.glob(
  [
    "./assets/*.{jpg,jpeg,png,webp,svg}",
    "./assets/Nigeria_foods/*.{jpg,jpeg,png,webp,svg}",
  ],
  {
    eager: true,
    import: "default",
  }
);
const imageMap = {};
Object.entries(imageModules).forEach(([path, url]) => {
  const name = path.split("/").pop().split(".")[0];
  imageMap[name] = url;
});
export default imageMap;
