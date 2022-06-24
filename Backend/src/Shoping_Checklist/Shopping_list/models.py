from django.db import models
from django.utils import timezone


class ShoppingLIst(models.Model):

    Purchased_Time = models.DateTimeField(default=timezone.now)
    Name = models.TextField(max_length=144, blank=True, null=True)
    Cost = models.FloatField(blank=True, null=True)
    Description = models.TextField(max_length=500, blank=True, null=True)
    Bought_Item = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.id} {self.Name}'

    class Meta:
        db_table = 'shopping_checklist'
        verbose_name_plural = f"Shopping Checklist Items List"
        verbose_name = "Shopping Checklist Item"
