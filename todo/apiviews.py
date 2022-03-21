from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Todo
from .serializers import todoSerializer

class todo_list(APIView):
    def get(self, request):
        todo = Todo.objects.all()
        data = todoSerializer(todo, many=True).data
        return Response(data)

class todo_detail(APIView):
    def get(self, request, pk):
        todo = get_object_or_404(Todo, pk=pk)
        data = todoSerializer(todo).data
        return Response(data)
