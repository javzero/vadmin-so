<div class="form-body">
    <div class="row">
        <div class="col-lg-4 col-md-6">
            <div class="form-group">
                {!! Form::label('username', 'Nombre de Usuario') !!}
                {!! Form::text('username', null, ['class' => 'form-control', 'placeholder' => 'Ingrese el nombre del usuario', 'required' => '']) !!}
            </div>
            <div class="form-group">
                {!! Form::label('name', 'Nombre') !!}
                {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => 'Ingrese el nombre', 'required' => '']) !!}
            </div>
            <div class="form-group">
                {!! Form::label('surname', 'Apellido') !!}
                {!! Form::text('surname', null, ['class' => 'form-control', 'placeholder' => 'Ingrese el apellido', 'required' => '']) !!}
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="form-group">
                {!! Form::label('email', 'E-mail') !!}
                {!! Form::text('email', null, ['class' => 'form-control', 'placeholder' => 'Ingrese el e-mail', 'required' => '']) !!}
            </div>
            <div class="form-group">
                {{-- Group: 1 Member - 2 Client - 3 ClientBig --}}
                {!! Form::label('group', 'Grupo') !!}
                {!! Form::select('group', [2 => 'Minorísta', 3 => 'Mayorísta'], null, ['class' => 'form-control', 'placeholder' => 'Seleccione una opcion']) !!}
            </div>
        </div>
        <div class="col-lg-4 col-md-12">
            <div class="form-group">
                {!! Form::label('password', 'Contraseña') !!}
                {!! Form::password('password', ['class' => 'form-control', 'placeholder' => 'Ingrese la contraseña', 'required' => '']) !!}
            </div>

            <div class="form-group">
                {!! Form::label('password_confirmation', 'Confirme la contraseña') !!}
                {!! Form::password('password_confirmation', ['class' => 'form-control', 'placeholder' => 'Confirme la contraseña', 'required' => '']) !!}
            </div>
        </div>
    </div>
</div>