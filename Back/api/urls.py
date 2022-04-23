# urls here

from django.urls import path

from .views import TutorView, post_teacher_phone, StudentView, post_student_phone, tutor_courses, tutor_details, \
    CourseView, course_details, course_tutors

urlpatterns = [
    path('tutors/', TutorView.as_view()),
    path('tutors/<int:id>', tutor_details),
    path('tutors/phones/', post_teacher_phone),
    path('tutors/<int:id>/courses', tutor_courses),
    path('students/', StudentView.as_view()),
    path('students/phones/', post_student_phone),
    path('courses/', CourseView.as_view()),
    path('courses/<int:id>', course_details),
    path('courses/<int:id>/tutors', course_tutors)
]
