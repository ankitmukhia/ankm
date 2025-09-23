import GitHubCalendar from "react-github-calendar";

const explicitTheme = {
  light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
  // dark: ["#383939", "#4C5264", "#626E95", "#798CC7", "#8FA8FA"],
  dark: ["#252B28", "#3E4C3A", "#4E614B", "#658062", "#85A482"],
};

export const GithubActivityGraph = () => {
  return (
    <div className="flex items-start justify-start font-satoshi border-white/5 rounded-lg ">
      <GitHubCalendar
        username="ankitmukhia"
        fontSize={12}
        blockSize={9.5}
        theme={explicitTheme}
        colorScheme="dark"
      />
    </div>
  );
};
