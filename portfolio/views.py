from django.shortcuts import render, redirect
from .models import Project, Skill
from .forms import ProjectForm

def home(request):
    projects = Project.objects.all()
    skills = Skill.objects.all()
    return render(request, 'portfolio/home.html', {'projects': projects, 'skills': skills})

def add_project(request):
    if request.method == 'POST':
        form = ProjectForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ProjectForm()
    return render(request, 'portfolio/add_project.html', {'form': form})
