from django.forms import ModelForm
from .models import Room
# from .models import QuesH

class RoomForm(ModelForm):
    class Meta:
        model = Room
        fields = '__all__'

        # class QuesHForm(ModelForm):
        #     class Meta:
        #         model = QuesH
        #         fields = '__all__'

# class QuesHForm(ModelForm):
#     class Meta:
#         model = QuesH
#         fields = '__all__'
