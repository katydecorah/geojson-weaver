---
---

var statesData = {
  "type": "FeatureCollection",
  "features": [{% for s in site.data.states %}{% for x in site.data.data %}{% if s.state == x.state %}
    {
      "type": "Feature",
      "properties": {
        "name": "{{s.state}}",
        "medical_temporary": "{{x.medical_temporary}}",
        "medical_permanent": "{{x.medical_permanent}}",
        "religious": "{{x.religious}}",
        "philosophical": "{{x.philosophical}}"
      },
      "geometry": {
        "type": "{{s.type}}",
        "coordinates": {{s.coordinates}}
      }
    }{% if forloop.last %}{% else %},{% endif %}{% endif %}{% endfor %}{% endfor %}
  ]
};