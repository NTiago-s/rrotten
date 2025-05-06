export default function Contacto() {
  return (
    <div className="flex flex-col items-center gap-6 justify-center">
      <h1 className="text-xl font-semibold">CONTACTO</h1>

      <div className="flex flex-col md:flex-wrap gap-10 text-primary-txt justify-between">
        <div>
          <h3>DIRECCIÓN</h3>
          <hr />
          <p>Via Fiori Chiari esquina Marco Formentini</p>
          <p>20121 Milán (IT)</p>
        </div>

        <div>
          <h3>TELÉFONO</h3>
          <hr />
          <p>(+54) 02 8454 2968</p>
          <h3>Email</h3>
          <hr />
          <p>rrotten@gmail.com</p>
        </div>

        <div>
          <h3>HORARIOS</h3>
          <hr />
          <p>
            <strong>De martes a viernes</strong>
            <br />
            De 11:00 a 15:00 y de 18:30 a 00:00
          </p>
          <p>
            <strong>Sábado</strong>
            <br />
            De 10:00 a 16:30 y de 17:30 a 00:00
          </p>
          <p>
            <strong>Domingo</strong>
            <br />
            De 10:00 a 16:00
          </p>
        </div>
      </div>
    </div>
  );
}
