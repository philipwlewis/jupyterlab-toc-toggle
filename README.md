# jupyterlab-toc-toggle

This stores a .js script for adding a toc and code toggle buttons to Jupyter Notebooks saved as HTML files. 

To use add the following to a markdown cell at the top of a JupyterLab notebook. The `<div>...</div>` means the cell will not disappear completely when displayed as markdown, but is hidden when the HTML is generated.

```
<div id="toggle_code">...</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/philipwlewis/jupyterlab-toc-toggle/jlab-toc-toggle.js"></script>
```
