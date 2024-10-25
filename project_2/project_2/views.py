from django.http import HttpResponse
from django.shortcuts import render
from services.models import Service
def home(request):
    return render(request,"index.html")
def aboutUs(request):  
    return render(request,"about.html")
def contact(request):
    return render(request,"contact.html")
def services(request): 
    serviceData = Service.objects.all()
    data  = {"serviceData":serviceData}
    for i in serviceData:
        print(i.service_title)  
    return render(request,"services.html",data)                   