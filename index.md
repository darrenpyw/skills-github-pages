---
title: Home
layout: default
---

# Welcome to Darren Pang's Profile

I am a Senior Offensive Security Specialist with expertise in securing crypto exchange infrastructures, penetration testing, and vulnerability management.

Check out my [Resume]({{ '/resume' | relative_url }}) for detailed professional experience.

## Latest Posts

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
