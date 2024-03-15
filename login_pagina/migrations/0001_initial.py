# Generated by Django 5.0.1 on 2024-03-01 00:25

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='usuarios_cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('primeiro_nome', models.CharField(max_length=120, verbose_name='Nome')),
                ('sobre_nome', models.CharField(max_length=120, verbose_name='Sobrenome')),
                ('cpf', models.CharField(max_length=11, verbose_name='CPF')),
                ('password', models.CharField(max_length=100, verbose_name='Senha')),
            ],
        ),
        migrations.CreateModel(
            name='usuarios_medico',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('primeiro_nome', models.CharField(max_length=120, verbose_name='Nome')),
                ('sobre_nome', models.CharField(max_length=120, verbose_name='Sobrenome')),
                ('endereco_email', models.EmailField(max_length=254, verbose_name='Endereco de email')),
                ('password', models.CharField(max_length=100, verbose_name='Senha')),
            ],
        ),
        migrations.CreateModel(
            name='exames',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_exame', models.CharField(max_length=120, verbose_name='Exame realizado')),
                ('data_realizacao', models.DateField(verbose_name='Data de realizacao do exame')),
                ('descricao', models.TextField(blank=True)),
                ('arquivo', models.FileField(upload_to='arquivos/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf'])])),
                ('paciente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login_pagina.usuarios_cliente')),
            ],
        ),
    ]