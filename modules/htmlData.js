const loginHtmlData = `{% extends "index.html" %}
{% block signUpForm %}
{{ form.hidden_tag() }}

  {% for field in form
         if field.widget.input_type != 'hidden' %}

    <p>
      {{ field }}
    </p>

  {% endfor %}
{% endblock %}
{% block backBtn %}
<a href="/"> go back</a>
{% endblock %}`



const apiKey  = `k0RyfVyNEf4wRPFMfvm5jQeF`
