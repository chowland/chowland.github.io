---
layout: page
permalink: /repositories/
title: repositories
description: An overview of the software I work on. I try to keep as much open-source as possible, but some very preliminary work may be kept private until it's ready.
nav: true
nav_order: 4
---

To keep up with the times, I've started work on a GPU-accelerated codebase that combines what I have learned from using both AFiD and DIABLO. If you're interested in helping out or have any Fortran GPU tips, please get in touch!

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.my_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.my_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

{% endif %}
