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

| **tag**             | **description**                                                                 |
| :------------------ | ------------------------------------------------------------------------------- |
| `<a>`               | Defines a hyperlink.                                                            |
| `<abbr>`            | Defines an abbreviation or acronym.                                             |
| `<acronym>`         | Not supported in HTML5, use `<abbr>` instead.                                   |
| `<address>`         | Defines contact information for the author/owner of a document.                 |
| `<applet>`          | Not supported in HTML5, use `<object>` instead.                                 |
| `<area>`            | Defines an area inside an image map.                                            |
| `<article>`         | Defines independent, self-contained content.                                    |
| `<aside>`           | Defines content aside from the page content.                                    |
| `<audio>`           | Defines sound content.                                                          |
| `<b>`               | Defines bold text.                                                              |
| `<base>`            | Specifies the base URL/target for all relative URLs in a document.              |
| `<basefont>`        | Not supported in HTML5, use CSS instead.                                        |
| `<bb>`              | Defines bold text (non-standard).                                               |
| `<bdo>`             | Overrides the current text direction.                                           |
| `<big>`             | Not supported in HTML5, use CSS instead.                                        |
| `<blockquote>`      | Defines a section that is quoted from another source.                           |
| `<body>`            | Defines the document's body.                                                    |
| `<br>`              | Inserts a single line break.                                                    |
| `<button>`          | Defines a clickable button.                                                     |
| `<canvas>`          | Used to draw graphics via scripting (usually JavaScript).                       |
| `<caption>`         | Defines a table caption.                                                        |
| `<center>`          | Not supported in HTML5, use CSS instead.                                        |
| `<cite>`            | Defines the title of a work.                                                    |
| `<code>`            | Defines a piece of computer code.                                               |
| `<col>`             | Specifies column properties for each column within a `<colgroup>`.              |
| `<colgroup>`        | Specifies a group of one or more columns in a table for formatting.             |
| `<command>`         | Defines a command button that a user can invoke.                                |
| `<datalist>`        | Specifies a list of pre-defined options for an `<input>` element.               |
| `<dd>`              | Defines a description/value of a term in a description list.                    |
| `<del>`             | Defines text that has been deleted from a document.                             |
| `<details>`         | Defines additional details that the user can view or hide.                      |
| `<dfn>`             | Represents the defining instance of a term.                                     |
| `<dialog>`          | Defines a dialog box or window.                                                 |
| `<dir>`             | Not supported in HTML5, use `<ul>` instead.                                     |
| `<div>`             | Defines a division or a section in an HTML document.                            |
| `<dl>`              | Defines a description list.                                                     |
| `<dt>`              | Defines a term/name in a description list.                                      |
| `<em>`              | Defines emphasized text.                                                        |
| `<embed>`           | Defines a container for an external application or interactive content.         |
| `<eventsource>`     | Not standard, was an early version of `<sse>` now `<eventsource>` is outdated.  |
| `<fieldset>`        | Groups related elements in a form.                                              |
| `<figcaption>`      | Defines a caption for a `<figure>` element.                                      |
| `<figure>`          | Specifies self-contained content.                                               |
| `<font>`            | Not supported in HTML5, use CSS instead.                                        |
| `<footer>`          | Defines a footer for a document or section.                                     |
| `<form>`            | Defines an HTML form for user input.                                            |
| `<frame>`           | Not supported in HTML5, use `<iframe>` instead.                                 |
| `<frameset>`        | Not supported in HTML5, use `<iframe>` instead.                                 |
| `<h1>`              | Defines HTML headings.                                                          |
| `<h2>`              | Defines HTML headings.                                                          |
| `<h3>`              | Defines HTML headings.                                                          |
| `<h4>`              | Defines HTML headings.                                                          |
| `<h5>`              | Defines HTML headings.                                                          |
| `<h6>`              | Defines HTML headings.                                                          |
| `<head>`            | Contains metadata/information for the document.                                 |
| `<header>`          | Defines a header for a document or section.                                     |
| `<hgroup>`          | Groups heading (`<h1>` to `<h6>`) elements.                                     |
| `<hr>`              | Defines a thematic change in the content.                                       |
| `<html>`            | Defines the root of an HTML document.                                           |
| `<i>`               | Defines a part of text in an alternate voice or mood.                           |
| `<iframe>`          | Defines an inline frame.                                                        |
| `<img>`             | Defines an image.                                                               |
| `<input>`           | Defines an input control.                                                       |
| `<ins>`             | Defines a text that has been inserted into a document.                          |
| `<isindex>`         | Not supported in HTML5. Use `<input>` instead.                                  |
| `<kbd>`             | Defines keyboard input.                                                         |
| `<keygen>`          | Defines a key-pair generator field (for forms).                                 |
| `<label>`           | Defines a label for an `<input>` element.                                       |
| `<legend>`          | Defines a caption for a `<fieldset>` element.                                   |
| `<li>`              | Defines a list item.                                                            |
| `<link>`            | Defines the relationship between a document and an external resource (most used to link to stylesheets).|
| `<map>`             | Defines an image map.                                                           |
| `<mark>`            | Defines marked/highlighted text.                                                |
| `<menu>`            | Defines a list/menu of commands.                                                |
| `<meta>`            | Defines metadata about an HTML document.                                        |
| `<meter>`           | Defines a scalar measurement within a known range (a gauge).                    |
| `<nav>`             | Defines navigation links.                                                       |
| `<noframes>`        | Not supported in HTML5. Use `<iframe>` instead.                                 |
| `<noscript>`        | Defines an alternate content for users that do not support client-side scripts. |
| `<object>`          | Defines an embedded object.                                                     |
| `<ol>`              | Defines an ordered list.                                                        |
| `<optgroup>`        | Defines a group of related options in a drop-down list.                         |
| `<option>`          | Defines an option in a drop-down list.                                          |
| `<output>`          | Defines the result of a calculation.                                            |
| `<p>`               | Defines a paragraph.                                                            |
| `<param>`           | Defines a parameter for an object.                                              |
| `<pre>`             | Defines preformatted text.                                                      |
| `<progress>`        | Represents the progress of a task.                                              |
| `<q>`               | Defines a short quotation.                                                      |
| `<rp>`              | Defines what to show in browsers that do not support ruby annotations.          |
| `<rt>`              | Defines an explanation/pronunciation of characters (for East Asian typography). |
| `<ruby>`            | Defines a ruby annotation (for East Asian typography).                          |
| `<s>`               | Defines text that is no longer correct.                                         |
| `<samp>`            | Defines sample output from a computer program.                                  |
| `<script>`          | Defines a client-side script.                                                   |
| `<section>`         | Defines a section in a document.                                                |
| `<select>`          | Defines a drop-down list.                                                       |
| `<small>`           | Defines smaller text.                                                           |
| `<source>`          | Defines multiple media resources for media elements (`<video>` and `<audio>`).  |
| `<span>`            | Defines a section in a document.                                                |
| `<strike>`          | Not supported in HTML5, use `<del>` or `<s>` instead.                           |
| `<strong>`          | Defines important text.                                                         |
| `<style>`           | Defines style information for a document.                                       |
| `<sub>`             | Defines subscripted text.                                                       |
| `<sup>`             | Defines superscripted text.                                                     |
| `<table>`           | Defines a table.                                                                |
| `<tbody>`           | Groups the body content in a table.                                             |
| `<td>`              | Defines a cell in a table.                                                      |
| `<textarea>`        | Defines a multi-line input control (text area).                                 |
| `<tfoot>`           | Groups the footer content in a table.                                           |
| `<th>`              | Defines a header cell in a table.                                               |
| `<thead>`           | Groups the header content in a table.                                           |
| `<time>`            | Defines a specific time (or datetime).                                          |
| `<title>`           | Defines a title for the document.                                               |
| `<tr>`              | Defines a row in a table.                                                       |
| `<track>`           | Defines text tracks for media elements (`<video>` and `<audio>`).               |
| `<tt>`              | Not supported in HTML5, use CSS instead.                                        |
| `<u>`               | Defines text that should be stylistically different from normal text.           |
| `<ul>`              | Defines an unordered list.                                                      |
| `<var>`             | Defines a variable.                                                             |
| `<video>`           | Defines a video or movie.                                                       |
| `<wbr>`             | Defines a possible line-break.                                                  |

## Links

- [Website](https://www.page.gl)
- [NPM](https://www.npmjs.com/package/page.gl)

---

## Colophon

### Authors

**page.gl** is an open-source project by **[Scape Agency](https://www.scape.agency "Scape Agency website")**.

#### Scape Agency

Scape Agency is a spatial innovation collective that dreams, discovers and designs the everyday of tomorrow. We blend design thinking with emerging technologies to create a brighter perspective for people and planet. Our products and services naturalise technology in liveable and sustainable –scapes that spark the imagination and inspire future generations.

- website: [scape.agency](https://www.scape.agency "Scape Agency website")
- github: [github.com/scape-agency](https://github.com/scape-agency "Scape Agency GitHub")

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
