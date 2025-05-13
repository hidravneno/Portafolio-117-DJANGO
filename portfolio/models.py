from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=100)
    level = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    skills = models.ManyToManyField(Skill)
    link = models.URLField(blank=True)

    def __str__(self):
        return self.title
