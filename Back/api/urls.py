# urls here
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import *

urlpatterns = [
    path('login/', CustomTokenObtainPairView.as_view()),
    path('login/refresh/', TokenRefreshView.as_view()),
    path('tutors/', TutorView.as_view()),
    path('tutors/<str:id>/', tutor_details),
    path('tutors/phones/', post_teacher_phone),
    path('tutors/<str:id>/courses/', tutor_courses),

    path('students/', StudentView.as_view()),
    path('students/phones/', post_student_phone),
    path('students/<int:id>/', student_details),
    path('students/<int:id>/courses/', student_courses),

    path('courses/', CourseView.as_view()),
    path('courses/<str:id>/', course_details),
    path('courses/<str:id>/tutors/', course_tutors),
    path('courses/<str:id>/comments/', course_comments),
    path('comments/', comments_list),

    path('money/', MoneyView.as_view())
]
