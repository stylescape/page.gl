<div align="right">

[![GitHub License](https://img.shields.io/github/license/scape-agency/page.gl?style=flat-square&logo=readthedocs&logoColor=FFFFFF&label=&labelColor=%23041B26&color=%23041B26&link=LICENSE)](https://github.com/scape-agency/page.gl/blob/main/LICENSE)
[![devContainer](https://img.shields.io/badge/Container-Remote?style=flat-square&logo=visualstudiocode&logoColor=%23FFFFFF&label=Remote&labelColor=%23041B26&color=%23041B26)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/scape-agency/page.gl)

</div>

---

<div>
    <img align="right" src="https://raw.githubusercontent.com/scape-agency/brand/master/src/logo/page.gl.png" width="96" alt="page.gl logo">
    <h1 align="left">page.gl</h1>
    <h3 align="left">Stylescape Layout Template Library</h3>
</div>

---

<img align="right" width="50%" src="https://raw.githubusercontent.com/scape-agency/page.gl/main/res/page.gl.png" alt="page.gl cover">

### Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Templates](#templates)
- [Colophon](#colophon)

<br clear="both"/>

---

<div align="right">

[![Report a Bug](https://img.shields.io/badge/Report%20a%20Bug-GitHub?style=flat-square&&logoColor=%23FFFFFF&color=%23E1E4E5)](https://github.com/scape-agency/page.gl/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&projects=&template=bug_report.yml)
[![Request a Feature](https://img.shields.io/badge/Request%20a%20Feature-GitHub?style=flat-square&&logoColor=%23FFFFFF&color=%23E1E4E5)](https://github.com/scape-agency/page.gl/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&projects=&template=feature_request.yml)
[![Ask a Question](https://img.shields.io/badge/Ask%20a%20Question-GitHub?style=flat-square&&logoColor=%23FFFFFF&color=%23E1E4E5)](https://github.com/scape-agency/page.gl/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&projects=&template=question.yml)
[![Make a Suggestion](https://img.shields.io/badge/Make%20a%20Suggestion-GitHub?style=flat-square&&logoColor=%23FFFFFF&color=%23E1E4E5)](https://github.com/scape-agency/page.gl/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&projects=&template=suggestion.yml)
[![Start a Discussion](https://img.shields.io/badge/Start%20a%20Discussion-GitHub?style=flat-square&&logoColor=%23FFFFFF&color=%23E1E4E5)](https://github.com/scape-agency/page.gl/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&projects=&template=discussion.yml)

</div>

**Stylescape Layout Template Library<.**

## Introduction

Welcome to `page.gl`, a comprehensive collection of layout templates created using Jinja. These templates are designed to simplify the process of web page creation, offering a variety of layouts that cater to different styles and purposes. Whether you're building a personal blog, a business site, or a creative portfolio, `page.gl` has something to offer.

## Features

- **Diverse Collection of Layouts**: Choose from a wide range of template designs, from minimalistic to complex.
- **Jinja-Powered Templates**: Easy integration with Python-based web applications.
- **Responsive Design**: All templates are built to be fully responsive, ensuring compatibility with various devices and screen sizes.
- **Well-Documented Code**: Each template is thoroughly documented, making customization and integration straightforward.

## Installation

To use `page.gl` templates in your project, follow these simple steps:

### GIT

1. **Clone the Repository**

   ``` sh
   git clone https://github.com/scape-agency/page.gl.git
   ```

2. **Navigate to the Repository**

   ``` sh
   cd page.gl
   ```

3. **Choose a Template**

   - Browse through the template collection and select one that suits your needs.
   - Copy the Jinja template files into your project.

### NPM Module

``` bash
npm i page.gl
```

## Usage

- Integrate the Jinja templates into your Python web application.
- Customize the templates as needed to fit the style and branding of your website.
- Utilize the well-documented code to tweak layouts, styles, and functionalities.

## Templates

### HTML Tags

| **Tag**             | **Name**                | **Description**                                                                 | **Links**                                                                                               | **Code**                                                                                                |
| :------------------ | :---------------------- | :------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| `<a>`               | **Anchor**              | Defines a hyperlink.                                                            | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), [W](https://www.w3schools.com/tags/tag_a.asp)          | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_a.html.jinja) |
| `<abbr>`            | **Abbreviation**        | Defines an abbreviation or acronym.                                             | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr), [W](https://www.w3schools.com/tags/tag_abbr.asp)       | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_abbr.html.jinja) |
| `<acronym>`         | **Acronym**             | Not supported in HTML5, use `<abbr>` instead.                                   | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym), [W](https://www.w3schools.com/tags/tag_acronym.asp)    | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_acronym.html.jinja) |
| `<address>`         | **Address**             | Defines contact information for the author/owner of a document.                 | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address), [W](https://www.w3schools.com/tags/tag_address.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_address.html.jinja) |
| `<applet>`          | **Applet**              | Not supported in HTML5, use `<object>` instead.                                 | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet), [W](https://www.w3schools.com/tags/tag_applet.asp)   | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_applet.html.jinja) |
| `<area>`            | **Area**                | Defines an area inside an image map.                                            | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area), [W](https://www.w3schools.com/tags/tag_area.asp)      | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_area.html.jinja) |
| `<article>`         | **Article**             | Defines independent, self-contained content.                                    | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article), [W](https://www.w3schools.com/tags/tag_article.asp)  | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_article.html.jinja) |
| `<aside>`           | **Aside**               | Defines content aside from the page content.                                    | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside), [W](https://www.w3schools.com/tags/tag_aside.asp)     | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_aside.html.jinja) |
| `<audio>`           | **Audio**               | Defines sound content.                                                          | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [W](https://www.w3schools.com/tags/tag_audio.asp)     | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_audio.html.jinja) |
| `<b>`               | **Bold**                | Defines bold text.                                                              | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b), [W](https://www.w3schools.com/tags/tag_b.asp)             | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_b.html.jinja) |
| `<base>`            | **Base**                | Specifies the base URL/target for all relative URLs in a document.              | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base), [W](https://www.w3schools.com/tags/tag_base.asp)       | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_base.html.jinja) |
| `<basefont>`        | **Basefont**            | Not supported in HTML5, use CSS instead.                                        | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/basefont), [W](https://www.w3schools.com/tags/tag_basefont.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_basefont.html.jinja) |
| `<bb>`              | **Bold**                | Defines bold text (non-standard).                                               | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bb), [W](https://www.w3schools.com/tags/tag_bb.asp)           | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_bb.html.jinja) |
| `<bdo>`             | **Bidirectional Override** | Overrides the current text direction.                                           | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo), [W](https://www.w3schools.com/tags/tag_bdo.asp)         | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_bdo.html.jinja) |
| `<big>`             | **Big**                 | Not supported in HTML5, use CSS instead.                                        | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big), [W](https://www.w3schools.com/tags/tag_big.asp)         | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_big.html.jinja) |
| `<blockquote>`      | **Blockquote**          | Defines a section that is quoted from another source.                           | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote), [W](https://www.w3schools.com/tags/tag_blockquote.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_blockquote.html.jinja) |
| `<body>`            | **Body**                | Defines the document's body.                                                    | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body), [W](https://www.w3schools.com/tags/tag_body.asp)       | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_body.html.jinja) |
| `<br>`              | **Break**               | Inserts a single line break.                                                    | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br), [W](https://www.w3schools.com/tags/tag_br.asp)           | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_br.html.jinja) |
| `<button>`          | **Button**              | Defines a clickable button.                                                     | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [W](https://www.w3schools.com/tags/tag_button.asp)   | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_button.html.jinja) |
| `<canvas>`          | **Canvas**              | Used to draw graphics via scripting (usually JavaScript).                       | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas), [W](https://www.w3schools.com/tags/tag_canvas.asp)   | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_canvas.html.jinja) |
| `<caption>`         | **Caption**             | Defines a table caption.                                                        | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption), [W](https://www.w3schools.com/tags/tag_caption.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_caption.html.jinja) |
| `<center>`          | **Center**              | Not supported in HTML5, use CSS instead.                                        | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center), [W](https://www.w3schools.com/tags/tag_center.asp)   | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_center.html.jinja) |
| `<cite>`            | **Cite**                | Defines the title of a work.                                                    | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite), [W](https://www.w3schools.com/tags/tag_cite.asp)       | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_cite.html.jinja) |
| `<code>`            | **Code**                | Defines a piece of computer code.                                               | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code), [W](https://www.w3schools.com/tags/tag_code.asp)      | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_code.html.jinja) |
| `<col>`             | **Column**              | Specifies column properties for each column within a `<colgroup>`.              | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col), [W](https://www.w3schools.com/tags/tag_col.asp)        | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_col.html.jinja) |
| `<colgroup>`        | **Column Group**        | Specifies a group of one or more columns in a table for formatting.             | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup), [W](https://www.w3schools.com/tags/tag_colgroup.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_colgroup.html.jinja) |
| `<command>`         | **Command**             | Defines a command button that a user can invoke.                                | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/command), [W](https://www.w3schools.com/tags/tag_command.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_command.html.jinja) |
| `<datalist>`        | **Datalist**            | Specifies a list of pre-defined options for an `<input>` element.               | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist), [W](https://www.w3schools.com/tags/tag_datalist.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_datalist.html.jinja) |
| `<dd>`              | **Description Data**    | Defines a description/value of a term in a description list.                    | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd), [W](https://www.w3schools.com/tags/tag_dd.asp)           | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_dd.html.jinja) |
| `<del>`             | **Deleted Text**        | Defines text that has been deleted from a document.                             | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del), [W](https://www.w3schools.com/tags/tag_del.asp)         | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_del.html.jinja) |
| `<details>`         | **Details**             | Defines additional details that the user can view or hide.                      | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details), [W](https://www.w3schools.com/tags/tag_details.asp)  | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_details.html.jinja) |
| `<dfn>`             | **Definition**          | Represents the defining instance of a term.                                     | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn), [W](https://www.w3schools.com/tags/tag_dfn.asp)         | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_dfn.html.jinja) |
| `<dialog>`          | **Dialog**              | Defines a dialog box or window.                                                 | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog), [W](https://www.w3schools.com/tags/tag_dialog.asp)   | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_dialog.html.jinja) |
| `<dir>`             | **Directory List**      | Not supported in HTML5, use `<ul>` instead.                                     | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dir), [W](https://www.w3schools.com/tags/tag_dir.asp)         | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_dir.html.jinja) |
| `<div>`             | **Division**            | Defines a division or a section in an HTML document.                            | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div), [W](https://www.w3schools.com/tags/tag_div.asp)         | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_div.html.jinja) |
| `<dl>`              | **Description List**    | Defines a description list.                                                     | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl), [W](https://www.w3schools.com/tags/tag_dl.asp)           | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_dl.html.jinja) |
| `<dt>`              | **Description Term**    | Defines a term/name in a description list.                                      | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt), [W](https://www.w3schools.com/tags/tag_dt.asp)           | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_dt.html.jinja) |
| `<em>`              | **Emphasis**            | Defines emphasized text.                                                        | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em), [W](https://www.w3schools.com/tags/tag_em.asp)           | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_em.html.jinja) |
| `<embed>`           | **Embed**               | Defines a container for an external application or interactive content.         | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed), [W](https://www.w3schools.com/tags/tag_embed.asp)     | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_embed.html.jinja) |
| `<fieldset>`        | **Fieldset**            | Groups related elements in a form.                                              | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset), [W](https://www.w3schools.com/tags/tag_fieldset.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_fieldset.html.jinja) |
| `<figcaption>`      | **Figure Caption**      | Defines a caption for a `<figure>` element.                                      | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption), [W](https://www.w3schools.com/tags/tag_figcaption.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_figcaption.html.jinja) |
| `<figure>`          | **Figure**              | Specifies self-contained content.                                               | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure), [W](https://www.w3schools.com/tags/tag_figure.asp)   | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_figure.html.jinja) |
| `<font>`            | **Font**                | Not supported in HTML5, use CSS instead.                                        | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font), [W](https://www.w3schools.com/tags/tag_font.asp)       | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_font.html.jinja) |
| `<footer>`          | **Footer**              | Defines a footer for a document or section.                                     | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer), [W](https://www.w3schools.com/tags/tag_footer.asp)   | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_footer.html.jinja) |
| `<form>`            | **Form**                | Defines an HTML form for user input.                                            | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form), [W](https://www.w3schools.com/tags/tag_form.asp)       | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_form.html.jinja) |
| `<form>`            | **Form**                | Defines an HTML form for user input.                                            | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form), [W](https://www.w3schools.com/tags/tag_form.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_form.html.jinja) |
| `<frame>`           | **Frame**               | Not supported in HTML5, use `<iframe>` instead.                                 | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame), [W](https://www.w3schools.com/tags/tag_frame.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_frame.html.jinja) |
| `<frameset>`        | **Frameset**            | Not supported in HTML5, use `<iframe>` instead.                                 | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset), [W](https://www.w3schools.com/tags/tag_frameset.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_frameset.html.jinja) |
| `<h1>`              | **Heading 1**           | Defines HTML headings.                                                          | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements), [W](https://www.w3schools.com/tags/tag_hn.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_h1.html.jinja) |
| `<h2>`              | **Heading 2**           | Defines HTML headings.                                                          | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements), [W](https://www.w3schools.com/tags/tag_hn.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_h2.html.jinja) |
| `<h3>`              | **Heading 3**           | Defines HTML headings.                                                          | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements), [W](https://www.w3schools.com/tags/tag_hn.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_h3.html.jinja) |
| `<h4>`              | **Heading 4**           | Defines HTML headings.                                                          | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements), [W](https://www.w3schools.com/tags/tag_hn.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_h4.html.jinja) |
| `<h5>`              | **Heading 5**           | Defines HTML headings.                                                          | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements), [W](https://www.w3schools.com/tags/tag_hn.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_h5.html.jinja) |
| `<h6>`              | **Heading 6**           | Defines HTML headings.                                                          | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements), [W](https://www.w3schools.com/tags/tag_hn.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_h6.html.jinja) |
| `<head>`            | **Head**                | Contains metadata/information for the document.                                 | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head), [W](https://www.w3schools.com/tags/tag_head.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_head.html.jinja) |
| `<header>`          | **Header**              | Defines a header for a document or section.                                     | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), [W](https://www.w3schools.com/tags/tag_header.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_header.html.jinja) |
| `<hgroup>`          | **Heading Group**       | Groups heading (`<h1>` to `<h6>`) elements.                                     | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup), [W](https://www.w3schools.com/tags/tag_hgroup.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_hgroup.html.jinja) |
| `<hr>`              | **Horizontal Rule**     | Defines a thematic change in the content.                                       | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr), [W](https://www.w3schools.com/tags/tag_hr.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_hr.html.jinja) |
| `<html>`            | **HTML**                | Defines the root of an HTML document.                                           | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html), [W](https://www.w3schools.com/tags/tag_html.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_html.html.jinja) |
| `<i>`               | **Italic**              | Defines a part of text in an alternate voice or mood.                           | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i), [W](https://www.w3schools.com/tags/tag_i.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_i.html.jinja) |
| `<iframe>`          | **Inline Frame**        | Defines an inline frame.                                                        | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), [W](https://www.w3schools.com/tags/tag_iframe.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_iframe.html.jinja) |
| `<img>`             | **Image**               | Defines an image.                                                               | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [W](https://www.w3schools.com/tags/tag_img.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_img.html.jinja) |
| `<input>`           | **Input**               | Defines an input control.                                                       | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [W](https://www.w3schools.com/tags/tag_input.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_input.html.jinja) |
| `<ins>`             | **Inserted Text**       | Defines text that has been inserted into a document.                            | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins), [W](https://www.w3schools.com/tags/tag_ins.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_ins.html.jinja) |
| `<isindex>`         | **Input Prompt**        | Not supported in HTML5. Use `<input>` instead.                                  | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex), [W](https://www.w3schools.com/tags/tag_isindex.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_isindex.html.jinja) |
| `<kbd>`             | **Keyboard Input**      | Defines keyboard input.                                                         | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd), [W](https://www.w3schools.com/tags/tag_kbd.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_kbd.html.jinja) |
| `<keygen>`          | **Keygen**              | Defines a key-pair generator field (for forms).                                 | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen), [W](https://www.w3schools.com/tags/tag_keygen.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_keygen.html.jinja) |
| `<label>`           | **Label**               | Defines a label for an `<input>` element.                                       | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label), [W](https://www.w3schools.com/tags/tag_label.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_label.html.jinja) |
| `<legend>`          | **Legend**              | Defines a caption for a `<fieldset>` element.                                   | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend), [W](https://www.w3schools.com/tags/tag_legend.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_legend.html.jinja) |
| `<li>`              | **List Item**           | Defines a list item.                                                            | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li), [W](https://www.w3schools.com/tags/tag_li.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_li.html.jinja) |
| `<link>`            | **Link**                | Defines the relationship between a document and an external resource (most used to link to stylesheets).| [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link), [W](https://www.w3schools.com/tags/tag_link.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_link.html.jinja) |
| `<map>`             | **Map**                 | Defines an image map.                                                           | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map), [W](https://www.w3schools.com/tags/tag_map.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_map.html.jinja) |
| `<mark>`            | **Mark**                | Defines marked/highlighted text.                                                | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark), [W](https://www.w3schools.com/tags/tag_mark.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_mark.html.jinja) |
| `<menu>`            | **Menu**                | Defines a list/menu of commands.                                                | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu), [W](https://www.w3schools.com/tags/tag_menu.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_menu.html.jinja) |
| `<meta>`            | **Meta**                | Defines metadata about an HTML document.                                        | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta), [W](https://www.w3schools.com/tags/tag_meta.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_meta.html.jinja) |
| `<meter>`           | **Meter**               | Defines a scalar measurement within a known range (a gauge).                    | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter), [W](https://www.w3schools.com/tags/tag_meter.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_meter.html.jinja) |
| `<nav>`             | **Navigation**          | Defines navigation links.                                                       | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav), [W](https://www.w3schools.com/tags/tag_nav.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_nav.html.jinja) |
| `<noframes>`        | **No Frames**           | Not supported in HTML5. Use `<iframe>` instead.                                 | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noframes), [W](https://www.w3schools.com/tags/tag_noframes.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_noframes.html.jinja) |
| `<noscript>`        | **No Script**           | Defines an alternate content for users that do not support client-side scripts. | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript), [W](https://www.w3schools.com/tags/tag_noscript.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_noscript.html.jinja) |
| `<object>`          | **Object**              | Defines an embedded object.                                                     | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object), [W](https://www.w3schools.com/tags/tag_object.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_object.html.jinja) |
| `<ol>`              | **Ordered List**        | Defines an ordered list.                                                        | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol), [W](https://www.w3schools.com/tags/tag_ol.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_ol.html.jinja) |
| `<optgroup>`        | **Option Group**        | Defines a group of related options in a drop-down list.                         | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup), [W](https://www.w3schools.com/tags/tag_optgroup.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_optgroup.html.jinja) |
| `<option>`          | **Option**              | Defines an option in a drop-down list.                                          | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option), [W](https://www.w3schools.com/tags/tag_option.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_option.html.jinja) |
| `<output>`          | **Output**              | Defines the result of a calculation.                                            | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output), [W](https://www.w3schools.com/tags/tag_output.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_output.html.jinja) |
| `<p>`               | **Paragraph**           | Defines a paragraph.                                                            | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p), [W](https://www.w3schools.com/tags/tag_p.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_p.html.jinja) |
| `<param>`           | **Parameter**           | Defines a parameter for an object.                                              | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param), [W](https://www.w3schools.com/tags/tag_param.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_param.html.jinja) |
| `<pre>`             | **Preformatted Text**   | Defines preformatted text.                                                      | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre), [W](https://www.w3schools.com/tags/tag_pre.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_pre.html.jinja) |
| `<progress>`        | **Progress**            | Represents the progress of a task.                                              | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), [W](https://www.w3schools.com/tags/tag_progress.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_progress.html.jinja) |
| `<q>`               | **Quote**               | Defines a short quotation.                                                      | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q), [W](https://www.w3schools.com/tags/tag_q.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_q.html.jinja) |
| `<rp>`              | **Ruby Parenthesis**    | Defines what to show in browsers that do not support ruby annotations.          | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp), [W](https://www.w3schools.com/tags/tag_rp.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_rp.html.jinja) |
| `<rt>`              | **Ruby Text**           | Defines an explanation/pronunciation of characters (for East Asian typography). | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt), [W](https://www.w3schools.com/tags/tag_rt.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_rt.html.jinja) |
| `<ruby>`            | **Ruby**                | Defines a ruby annotation (for East Asian typography).                          | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby), [W](https://www.w3schools.com/tags/tag_ruby.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_ruby.html.jinja) |
| `<s>`               | **Strikethrough**       | Defines text that is no longer correct.                                         | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s), [W](https://www.w3schools.com/tags/tag_s.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_s.html.jinja) |
| `<samp>`            | **Sample Output**       | Defines sample output from a computer program.                                  | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp), [W](https://www.w3schools.com/tags/tag_samp.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_samp.html.jinja) |
| `<script>`          | **Script**              | Defines a client-side script.                                                   | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script), [W](https://www.w3schools.com/tags/tag_script.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_script.html.jinja) |
| `<section>`         | **Section**             | Defines a section in a document.                                                | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section), [W](https://www.w3schools.com/tags/tag_section.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_section.html.jinja) |
| `<select>`          | **Select**              | Defines a drop-down list.                                                       | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), [W](https://www.w3schools.com/tags/tag_select.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_select.html.jinja) |
| `<small>`           | **Small Text**          | Defines smaller text.                                                           | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small), [W](https://www.w3schools.com/tags/tag_small.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_small.html.jinja) |
| `<source>`          | **Source**              | Defines multiple media resources for media elements (`<video>` and `<audio>`).  | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source), [W](https://www.w3schools.com/tags/tag_source.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_source.html.jinja) |
| `<span>`            | **Span**                | Defines a section in a document.                                                | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span), [W](https://www.w3schools.com/tags/tag_span.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_span.html.jinja) |
| `<strike>`          | **Strikethrough**       | Not supported in HTML5, use `<del>` or `<s>` instead.                           | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike), [W](https://www.w3schools.com/tags/tag_strike.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_strike.html.jinja) |
| `<strong>`          | **Strong**              | Defines important text.                                                         | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong), [W](https://www.w3schools.com/tags/tag_strong.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_strong.html.jinja) |
| `<style>`           | **Style**               | Defines style information for a document.                                       | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style), [W](https://www.w3schools.com/tags/tag_style.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_style.html.jinja) |
| `<sub>`             | **Subscript**           | Defines subscripted text.                                                       | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub), [W](https://www.w3schools.com/tags/tag_sub.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_sub.html.jinja) |
| `<sup>`             | **Superscript**         | Defines superscripted text.                                                     | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup), [W](https://www.w3schools.com/tags/tag_sup.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_sup.html.jinja) |
| `<table>`           | **Table**               | Defines a table.                                                                | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table), [W](https://www.w3schools.com/tags/tag_table.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_table.html.jinja) |
| `<tbody>`           | **Table Body**          | Groups the body content in a table.                                             | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody), [W](https://www.w3schools.com/tags/tag_tbody.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_tbody.html.jinja) |
| `<td>`              | **Table Data**          | Defines a cell in a table.                                                      | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td), [W](https://www.w3schools.com/tags/tag_td.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_td.html.jinja) |
| `<textarea>`        | **Textarea**            | Defines a multi-line input control (text area).                                 | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea), [W](https://www.w3schools.com/tags/tag_textarea.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_textarea.html.jinja) |
| `<tfoot>`           | **Table Footer**        | Groups the footer content in a table.                                           | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot), [W](https://www.w3schools.com/tags/tag_tfoot.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_tfoot.html.jinja) |
| `<th>`              | **Table Header**        | Defines a header cell in a table.                                               | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th), [W](https://www.w3schools.com/tags/tag_th.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_th.html.jinja) |
| `<thead>`           | **Table Head**          | Groups the header content in a table.                                           | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead), [W](https://www.w3schools.com/tags/tag_thead.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_thead.html.jinja) |
| `<time>`            | **Time**                | Defines a specific time (or datetime).                                          | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time), [W](https://www.w3schools.com/tags/tag_time.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_time.html.jinja) |
| `<title>`           | **Title**               | Defines a title for the document.                                               | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title), [W](https://www.w3schools.com/tags/tag_title.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_title.html.jinja) |
| `<tr>`              | **Table Row**           | Defines a row in a table.                                                       | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr), [W](https://www.w3schools.com/tags/tag_tr.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_tr.html.jinja) |
| `<track>`           | **Track**               | Defines text tracks for media elements (`<video>` and `<audio>`).               | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track), [W](https://www.w3schools.com/tags/tag_track.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_track.html.jinja) |
| `<tt>`              | **Teletype Text**       | Not supported in HTML5, use CSS instead.                                        | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt), [W](https://www.w3schools.com/tags/tag_tt.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_tt.html.jinja) |
| `<u>`               | **Underline**           | Defines text that should be stylistically different from normal text.           | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u), [W](https://www.w3schools.com/tags/tag_u.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_u.html.jinja) |
| `<ul>`              | **Unordered List**      | Defines an unordered list.                                                      | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul), [W](https://www.w3schools.com/tags/tag_ul.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_ul.html.jinja) |
| `<var>`             | **Variable**            | Defines a variable.                                                             | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var), [W](https://www.w3schools.com/tags/tag_var.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_var.html.jinja) |
| `<video>`           | **Video**               | Defines a video or movie.                                                       | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video), [W](https://www.w3schools.com/tags/tag_video.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_video.html.jinja) |
| `<wbr>`             | **Word Break Opportunity** | Defines a possible line-break.                                                  | [M](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr), [W](https://www.w3schools.com/tags/tag_wbr.asp) | [C](https://github.com/scape-agency/page.gl/blob/main/src/jinja/tags/_tag_wbr.html.jinja) |


---

## Colophon

### Authors

**page.gl** is an open-source project by **[Scape Agency](https://www.scape.agency "Scape Agency website")**.

#### Scape Agency

Scape Agency is a spatial innovation collective that dreams, discovers and designs the everyday of tomorrow. We blend design thinking with emerging technologies to create a brighter perspective for people and planet. Our products and services naturalise technology in liveable and sustainable –scapes that spark the imagination and inspire future generations.

- website: [scape.agency](https://www.scape.agency "Scape Agency website")
- github: [github.com/scape-agency](https://github.com/scape-agency "Scape Agency GitHub")

### Links

- [Website](https://www.page.gl)
- [NPM](https://www.npmjs.com/package/page.gl)

### Development Resources

#### Contributing

We'd love for you to contribute and to make this project even better than it is today!
Please refer to the [contribution guidelines](.github/CONTRIBUTING.md) for information.

### Legal Information

#### Copyright

Copyright &copy; 2023 [Scape Agency BV](https://www.scape.agency/ "Scape Agency website"). All Rights Reserved.

#### License

Except as otherwise noted, the content in this repository is licensed under the
[Creative Commons Attribution 4.0 International (CC BY 4.0) License](https://creativecommons.org/licenses/by/4.0/), and
code samples are licensed under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0).

Also see [LICENSE](https://github.com/scape-agency/community/blob/master/src/LICENSE) and [LICENSE-CODE](https://github.com/scape-agency/community/blob/master/src/LICENSE-CODE).

#### Disclaimer

**THIS SOFTWARE IS PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
