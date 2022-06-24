from rest_framework.routers import DefaultRouter

from .views import ShoppingViewSet

router = DefaultRouter()
router.register(r'checklist', ShoppingViewSet, basename='shopping_list')
urlpatterns = router.urls
