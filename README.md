# Paragraphs jQuery UI Accordion 2
Paragraphs jQuery UI Accordion 2 enables you to create paragraphs with
accordion effect in your content. It offers enhanced functionality over 
Paragraphs jQuery UI Accordion, using display modes rather than a single 
content field.

It is based on the jQuery UI Accordion plugin, which is already included in
core, so there is no need to install additional libraries. See examples on
https://jqueryui.com/accordion/.

This module is a fork from [Paragraphs jQuery UI Accordion](https://backdropcms.org/project/paragraphs_jquery_ui_accordion) ([Github Project Page](https://github.com/backdrop-contrib/paragraphs_jquery_ui_accordion)).

## Differences from Paragraphs jQuery UI Accordion
- Instead of a single content field, you select a display mode to use for
content in addition to the title field.
- If you have Font Awesome enabled then you will also be able to select an icon
field to display an icon in front of the heading.

## Features
- Ability to use it with any paragraph types.
- Ability to use several accordions on the same page
- Unique SEO link hashes (multilanguage support)
- Optional autoscroll to active paragraph (admin toolbar support)
- Configurable accordion options
- Use a display mode for content so you can configure for each paragraph type
using the Paragraph Manage Displays option.
- Optionally, add an icon field that will display in accordion header.

## Requirements
This module requires that the following module is also enabled:

- [Paragraphs](https://github.com/backdrop-contrib/paragraphs)

This module can optionally use [Font Awesome](https://github.com/backdrop-contrib/font_awesome) to show an icon in the
accordion header before the title.

## Installation
-  Install this module using the official [Backdrop CMS instructions](https://backdropcms.org/user-guide/modules).

## Usage
- Ensure each paragraph type has a text field for title and at least one other
field.
- If you wish to use icons, add a field to contain the Font Awesome icon
identifier string. This could be a text field or a list field.
- If you have Font Awesome enabled but do not wish to use in an accordion,
either do not set and icon field or leave the icon field blank for any
paragraphs you wish to not use an icon for.
- You must use common title and icon fields across different paragraph types.
- Create a paragraph display mode (for example, called Accordion) that excludes
the title field and, if applicable, the icon field.
- Customise this display mode on each paragraph type you wish to use in the accordion.
- Add a new paragraphs multiple field to your content type or entity.
- Go to your entity's Manage display screen and choose 'Paragraphs jQuery UI
Accordion 2' for the format.
- Select the proper fields for title and, if applicable, icon.
- Select the display mode and save your settings.
- You are now ready to add Accordions to your content.

## Issues
Bugs and feature requests should be reported in the [Issue Queue](https://github.com/backdrop-contrib/paragraphs_jquery_ui_accordion2/issues).

## Current Maintainers
- [Martin Price](https://github.com/yorkshire-pudding) - [System Horizons](https://www.systemhorizons.co.uk)
- Collaboration and co-maintainers welcome!

## Credits
- Created for Backdrop by [Martin Price](https://github.com/yorkshire-pudding) - [System Horizons](https://www.systemhorizons.co.uk)
- Based on a fork of [Paragraphs jQuery UI Accordion](https://github.com/backdrop-contrib/paragraphs_jquery_ui_accordion):
  - Ported to Backdrop
and maintained by [Alan Mels](https://github.com/alanmels) of [AltaGrade](https://www.altagrade.com)
  - Created for Drupal by [Maksym Shakhrai](https://github.com/maxdev)

## License
This project is GPL v2 software. See the LICENSE.txt file in this directory for
complete text.
