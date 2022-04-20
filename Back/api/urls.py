# urls here

from django.urls import path

from .views import TutorView, post_teacher_phone, StudentView, post_student_phone

urlpatterns = [
    path('tutors/', TutorView.as_view()),
    path('students/', StudentView.as_view()),
    path('students/phones/', post_student_phone),
    path('tutors/phones/', post_teacher_phone)
]
