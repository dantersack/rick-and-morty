import { render, screen } from "../../utils/test-util";
import { AvailableResources } from "./AvailableResources";

describe("display the available resources", () => {
  it("should display the characters card", () => {
    render(<AvailableResources />);
    const charactersTitle = screen.getByText("characters");
    expect(charactersTitle).toBeInTheDocument();
    const charactersDescription = screen.getByText(
      "Browse all Rick and Morty characters."
    );
    expect(charactersDescription).toBeInTheDocument();
    const seeCharactersNavLink = screen.getByText("See all characters");
    expect(seeCharactersNavLink).toBeInTheDocument();
  });

  it("should display the episodes card", () => {
    render(<AvailableResources />);
    const episodesTitle = screen.getByText("episodes");
    expect(episodesTitle).toBeInTheDocument();
    const episodesDescription = screen.getByText(
      "Browse all Rick and Morty episodes."
    );
    expect(episodesDescription).toBeInTheDocument();
    const seeEpisodesNavLink = screen.getByText("See all episodes");
    expect(seeEpisodesNavLink).toBeInTheDocument();
  });

  it("should display the locations card", () => {
    render(<AvailableResources />);
    const locationsTitle = screen.getByText("locations");
    expect(locationsTitle).toBeInTheDocument();
    const locationsDescription = screen.getByText(
      "Browse all Rick and Morty locations."
    );
    expect(locationsDescription).toBeInTheDocument();
    const seeLocationsNavLink = screen.getByText("See all locations");
    expect(seeLocationsNavLink).toBeInTheDocument();
  });
});
