---
# create lunr store for search page
---
{% if site.data.theme.search-child-objects == true %}
{%- assign items = site.data[site.metadata] | where_exp: 'item','item.objectid' -%}
{% else %}
{%- assign items = site.data[site.metadata] | where_exp: 'item','item.objectid and item.parentid == nil' -%}
{% endif %}
{%- assign fields = site.data.config-search -%}
var store = [ 
{%- for item in items -%} 
{  
{% for f in fields %}{% if item[f.field] %}{{ f.field | jsonify }}: {{ item[f.field] | normalize_whitespace | replace: '""','"' | jsonify }},{% endif %}{% endfor %} 
"objectid": {{ item.objectid | jsonify }},
{% if item.image_thumb %}"image_thumb": {{ item.image_thumb | jsonify }},{% endif %}
"image_alt_text": {{ item.image_alt_text | default: item.description | default: item.title | normalize_whitespace | replace: '""','"' | jsonify }},
"id": {% if item.parentid %}{{ item.parentid | append: '.html#' | append: item.objectid | jsonify }}{% else %}{{item.objectid | append: '.html' | jsonify }}{% endif %}

}{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
];
