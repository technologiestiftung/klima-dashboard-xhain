![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Klima Dashboard Xhain

The climate dashboard provides an insight into current climate data and climate measures in Friedrichshain-Kreuzberg.

- Where do greenhouse gas emissions occur in Xhain?
- Where are we as a district on the road to climate neutrality in Berlin?
- And where are the impacts of climate change already evident in the district?

The basis for this is the analyses from the climate mitigation and climate adaptation strategies. These two strategies were developed by the climate team and politically adopted in December 2024 as a planning and decision-making basis.

The climate dashboard has been developed in close cooperation between the Friedrichshain-Kreuzberg climate team and [CityLAB Berlin](https://citylab-berlin.org/de/start/).

## Prerequisites

- Node.js / npm (https://nodejs.org/en) with the version specified in .nvmrc

## Development setup

Prepare required env variables:

```plain
cp .env.sample .env
```

Install dependencies:

- `npm ci`

Run development server:

- `npm run dev`

Open http://localhost:5173 with your browser to see the application running.

## Development

You can deploy and run the KlimaDashboard on the platform of your choice. We use [vercel.com](vercel.com), you can follow their step-by-step guides to deploy your version of KlimaDashboard.

## Tests

Run accessibility test:

- `npm run test:a11y`

## Contributing

Before you create a pull request, write an issue so we can discuss your changes.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://annaeschenbacher.com"><img src="https://avatars.githubusercontent.com/u/56318362?v=4?s=64" width="64px;" alt="aeschi"/><br /><sub><b>aeschi</b></sub></a><br /><a href="#infra-aeschi" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/technologiestiftung/klima-dashboard-xhain/commits?author=aeschi" title="Tests">⚠️</a> <a href="#a11y-aeschi" title="Accessibility">️️️️♿️</a> <a href="https://github.com/technologiestiftung/klima-dashboard-xhain/commits?author=aeschi" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/raphael-arce"><img src="https://avatars.githubusercontent.com/u/8709861?v=4?s=64" width="64px;" alt="Raphael.A"/><br /><sub><b>Raphael.A</b></sub></a><br /><a href="#infra-raphael-arce" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/technologiestiftung/klima-dashboard-xhain/commits?author=raphael-arce" title="Tests">⚠️</a> <a href="#a11y-raphael-arce" title="Accessibility">️️️️♿️</a> <a href="https://github.com/technologiestiftung/klima-dashboard-xhain/commits?author=raphael-arce" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/zainab-tariq"><img src="https://avatars.githubusercontent.com/u/15946816?v=4?s=64" width="64px;" alt="Zainab Tariq"/><br /><sub><b>Zainab Tariq</b></sub></a><br /><a href="#a11y-zainab-tariq" title="Accessibility">️️️️♿️</a> <a href="https://github.com/technologiestiftung/klima-dashboard-xhain/commits?author=zainab-tariq" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Jaszkowic"><img src="https://avatars.githubusercontent.com/u/10830180?v=4?s=64" width="64px;" alt="Jonas Jaszkowic"/><br /><sub><b>Jonas Jaszkowic</b></sub></a><br /><a href="https://github.com/technologiestiftung/klima-dashboard-xhain/commits?author=Jaszkowic" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Content Licensing

Texts and content available as [CC BY](https://creativecommons.org/licenses/by/3.0/de/).

## Credits

<table>
  <tr>
    <td>
      Made by <a href="https://citylab-berlin.org/de/start/">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-citylab-color.svg" alt="Link to the CityLAB Berlin website" />
      </a>
    </td>
    <td>
      A project by <a href="https://www.technologiestiftung-berlin.de/">
        <br />
        <br />
        <img width="150" src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-de.svg" alt="Link to the Technologiestiftung Berlin website" />
      </a>
    </td>
    <td>
      Supported by <a href="https://www.berlin.de/rbmskzl/">
        <br />
        <br />
        <img width="80" src="https://logos.citylab-berlin.org/logo-berlin-senatskanzelei-de.svg" alt="Link to the Senate Chancellery of Berlin"/>
      </a>
    </td>
  </tr>
</table>
