from django.db import models


class Item(models.Model):
    name = models.CharField(max_length=255)
    info = models.TextField()
    price = models.PositiveIntegerField()

    def __str__(self):
        return self.name
