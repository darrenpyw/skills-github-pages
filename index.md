---
title: Home
layout: default
---

I'm an Offensive Security Specialist with expertise in securing crypto exchange infrastructures, conducting full-stack penetration testing and vulnerability management.

Check out my [Resume]({{ '/resume' | relative_url }}) for detailed professional experience.

## Latest Posts

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
