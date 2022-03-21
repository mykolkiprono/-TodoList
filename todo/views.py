from django.shortcuts import render,get_object_or_404
from django.http import JsonResponse
from .models import Todo

def todo_list(request):
    MAX_OBJECTS = 20
    objects = Todo.objects.all()[:MAX_OBJECTS]
    data = {"results": list(objects.values("name", "description", "completed"))}
    return JsonResponse(data)

def todo_detail(request,pk):
    obj = get_object_or_404(Todo, pk=pk)
    data = {"results": {"name": obj.name,"description": obj.description,"completed": obj.completed}}
    return JsonResponse(data)

