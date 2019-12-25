# Landerz

[Landerz](https://github.com/mvrahden/hugo-landerz-theme) is a port of the [Landerz](https://colorlib.com/wp/template/landerz/) theme from Colorlib.

## Theme Demo

- [openclusters.org](https://openclusters.org/)
- sample site - [github pages](https://mvrahden.github.io/openclusters/)

## Installation

Inside the folder of your Hugo site run:
```shell
    $ git submodule add https://github.com/mvrahden/hugo-landerz-theme.git themes/landerz
```

or

```shell
    $ cd themes
    $ git clone https://github.com/mvrahden/hugo-landerz-theme.git landerz
```

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.

## Sample Configuration

The following `config.toml` is used for the demo site. 

```toml
baseurl         = "/"
theme           = "landerz"
languageCode    = "en-US"
disqusShortname = ""
#SectionPagesMenu = "main"
canonifyurls    = true

[params]
  logo        = "images/top-logo.svg"
  title       = "#openclusters"
  subtitle    = "Affordable, self-governed & community-driven computer clusters"
  copyright   = "Copyright © 2019 All rights reserved."

  cover       = "img/blog-cover.jpg"
  description = "This page is a source for researchers, makers and tinkerers. Find and share building plans and source code, to create and provision your very own computer clusters."
  metaDescription = "This page is a source for researchers, makers and tinkerers. Find and share building plans and source code, to create and provision your very own computer clusters."
  customCSS = []
  RSSLink = ""
  showSubscribe = false
  #googleAnalytics = "UA-140974469-1"
  #[params.mailChimp]
  #  uuid = "54125c8e5f2a48f93fb250272"
  #  lid = "71dcf2d108"

  twitterName = ""
  fbName = ""
  githubName = "openclusters"
  githubRepo = "openclusters/openclusters"
  linkedinName = "mvrahden"
  mediumName = ""

  orgName = "openclusters.org"
  orgWebsite = "https://openclusters.org"
  orgDescription = ""

  #showSupport = true

  author = "mvrahden"
  authorLocation = "Lisbon, PT"
  authorWebsite = "https://openclusters.org"
  authorDescription = ""

  pageNotFoundTitle = "404 - Page not found"

[permalinks]
  post = "/post/:slug/"

[[menu.main]]
  name = "Home"
  url = "/"
  weight = 200

[[menu.main]]
  name = "Builds"
  url = "/build-plans/"
  weight = 99

[[menu.main]]
  name = "Provisionings"
  url = "/provisionings/"
  weight = 98

[[menu.main]]
  name = "Blog"
  url = "/blog/"
  weight = 97

[[menu.main]]
  name = "Contact"
  url = "#contact-section"
  weight = 96
```

Sample content structure is given in the `exampleSite` folder. Have fun!

## License

This theme is released under the MIT license. For more information read the [License](//github.com/mvrahden/hugo-landerz-theme/blob/master/LICENSE.md).


