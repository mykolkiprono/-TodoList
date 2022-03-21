from django.db import models

class Todo(models.Model):
    name = models.CharField(max_length=20)
    description = models.CharField(max_length=20)
    completed = models.BooleanField(default=False)
