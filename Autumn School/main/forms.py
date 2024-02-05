from .models import Request
from django import forms


class RequestForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['type_serv'].empty_label = 'Выберите услугу'

    class Meta:
        model = Request
        fields = ['name', 'surname', 'type_serv', 'comment']

        options = (('Услуга №1', 'Услуга №1'), ('Услуга №2', 'Услуга №2'))
        widgets = {
            'name': forms.TextInput(attrs={'class': 'request__content__form__input', 'placeholder': 'Имя', 'maxlenght': '30'}),
            'surname': forms.TextInput(attrs={'class': 'request__content__form__input', 'placeholder': 'Фамилия', 'maxlenght': '30'}),
            'type_serv': forms.Select(choices=options, attrs={'class': 'request__content__form__choose'}),
            'comment': forms.Textarea(attrs={'class': 'request__content__form__large_input', 'placeholder': 'Комментарий'})
        }
        
