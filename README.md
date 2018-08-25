# FoSH (Find on Sci-Hub)
Tampermonkey userscript that adds the ability to view content using the Sci-Hub service.

## Installation
You will need a web browser with some flavor of Tampermonkey installed. Tampermonkey was used in the creation of this userscript.

Navigate to https://raw.githubusercontent.com/lmike215/fosh/master/fosh.user.js and click the install button.

## Usage
FoSH supports two methods of access, via a proxy-like intercept service for Google Scholar, and individual site support.

A "Find on Sci-Hub!" link will appear under the abstract preview on Google Scholar. The link will be to the left of the star icon. If the resource is a Google Books resource, "Unavailable on Sci-Hub :-(" will be displayed. If the resource is a citation only, "Unavailable on Sci-Hub :-(" will also be displayed.

When on an individual site, a gray bar at the top of the website will be inserted and will display "Find on Sci-Hub!". Clicking on the bar will unlock the resource.

FoSH supports the following individual sites:

- asahq.org (Anesthesiology)
- ingentaconnect.com (Ingenta Connect)
- jwatch.org (NEJM Journal Watch)
- ncbi.nlm.nih.gov (PubMed)
- nejm.org (New England Journal of Medicine)
- sciencedirect.com (Science Direct)
- springer.com (Springer)
- tandfonline.com (Taylor and Francis)
- wiley.com (Wiley)

## Source requests
Don't see support for a site? You can always use Sci-Hub website to view it, but I made this tool out of laziness so I wouldn't have to do that. Send a pull request with support added in, or create an issue to request site support.

## Contributing
I welcome contributions and hope to see your pull request soon. This software is licensed under the MIT license.