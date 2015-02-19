---
---

var countryData = {
  "type": "FeatureCollection",
  "features": [{% for s in site.data.countries %}{% for x in site.data.leave %}{% if s.country == x.country %}
    {
      "type": "Feature",
      "properties": {
        "name": "{{s.country}}",
        "leave": {{x.leave}},
        "title": "{{s.country}}",
        "description": "Mothers receive {{x.leave}} weeks paid leave in {{s.country}}",
        "fill": "{% if x.leave == 0 %}#fff{% elsif x.leave <= 26 %}#aad8f1{% elsif x.leave <= 52 %}#4bc6df{% elsif x.leave >= 52.1 %}#197caa{% endif %}"
      },
      "geometry": {
        "type": "{{s.type}}",
        "coordinates": {{s.coordinates}}
      }
    },{% endif %}{% endfor %}{% endfor %}
  ]
};