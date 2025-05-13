from django.shortcuts import render

def projects_list_view(request):
    return render(request, 'projects/list.html')  # Cambiado a 'list.html'
