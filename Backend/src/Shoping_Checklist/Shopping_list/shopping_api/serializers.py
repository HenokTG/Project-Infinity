from rest_framework import serializers

from ..models import ShoppingLIst

class ShoppingSerializer(serializers.ModelSerializer):

    class Meta:
        model = ShoppingLIst
        fields = '__all__'
