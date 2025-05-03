from django.urls import path
from projects import views  # Importa correctamente el módulo views

urlpatterns = [
    path("", views.home_view, name="home"),
    # path("about/", views.about_view, name="about"),
    path("projects/", views.projects_view, name="projects"),
    path("testimonials/", views.testimonials_view, name="testimonials"),
    path("contact/", views.contact_view, name="contact"),
]
