from django.urls import path
# from .views import todo_detail,todo_list
from .apiviews import todo_list, todo_detail

urlpatterns = [
    path("todo/",todo_list.as_view(),name="todo_list"),
    path("todo_detail/<int:pk>/",todo_detail.as_view(),name="detail")
]