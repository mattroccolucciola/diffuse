# Generated by Django 2.2.8 on 2020-01-05 20:09

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('project', '0002_auto_20191203_1731'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='resource_id',
            new_name='resource_slug',
        ),
        migrations.AlterField(
            model_name='project',
            name='created_dt',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterUniqueTogether(
            name='project',
            unique_together={('user', 'project_slug', 'resource_slug', 'created_dt')},
        ),
    ]
