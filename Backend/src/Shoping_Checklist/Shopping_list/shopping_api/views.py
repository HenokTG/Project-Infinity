from rest_framework import viewsets, status
from rest_framework.response import Response

from .serializers import ShoppingSerializer
from ..models import ShoppingLIst


class ShoppingViewSet(viewsets.ModelViewSet):

    queryset = ShoppingLIst.objects.all().order_by('-Purchased_Time')
    serializer_class = ShoppingSerializer

    def update(self, request, format=None, *args, **kwargs):

        instance = self.get_object()
        serializer = self.serializer_class(instance, data=request.data, context={
                                           'request': request}, partial=True)

        if serializer.is_valid(raise_exception=True):
            item = serializer.save()
            if item:
                return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
