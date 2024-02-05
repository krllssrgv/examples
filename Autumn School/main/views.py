from django.shortcuts import render, redirect
from .models import Services
from .forms import RequestForm


def index(request):
    if request.method == 'POST':
        form = RequestForm(request.POST)
        if form.is_valid():
            try:
                form.save()
                return redirect('main')
            except:
                form.add_error(None, 'Ошибка отправки')
    
    form = RequestForm()
    posts = Services.objects.all()

    return render(request, 'main/index.html', {'posts': posts, 'form': form})
