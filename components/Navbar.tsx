import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "./ui/button";

const NAV = [
  {
    title: "Home",
    value: "home",
  },
  {
    title: "Project",
    value: "project",
  },
  {
    title: "Skill",
    value: "skill",
  },
  {
    title: "Education",
    value: "education",
  },
  {
    title: "Interest",
    value: "interest",
  },
];

const Navbar = () => {
  return (
    <MaxWidthWrapper className="fixed top-0 h-20 w-full flex items-center justify-between z-50">
      <h3 className="text-2xl">MyUniverse</h3>
      <div
        className={`hidden backdrop-blur-md md:flex gap-4 px-4 bg-white/10 border border-white/20 rounded-2xl py-1`}
      >
        {NAV.map((nav) => (
          <div className="cursor-pointer group" key={nav.value}>
            {nav.title}
            <div
              className="opacity-0 group-hover:animate-navbar
            group-hover:opacity-100 h-0.5 w-full bg-white"
            />
          </div>
        ))}
      </div>
      <Button>Contact me</Button>
    </MaxWidthWrapper>
  );
};
export default Navbar;
