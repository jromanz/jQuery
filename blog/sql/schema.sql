--
-- PostgreSQL database dump
--

-- Dumped from database version 9.1.2
-- Dumped by pg_dump version 9.1.2
-- Started on 2013-03-27 15:19:38

SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 169 (class 3079 OID 11639)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 1889 (class 0 OID 0)
-- Dependencies: 169
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 161 (class 1259 OID 58991)
-- Dependencies: 5
-- Name: autor; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE autor (
    idautor integer NOT NULL,
    nombre character varying(50),
    nick character varying(45),
    password character varying(255),
    email character varying(100)
);


ALTER TABLE public.autor OWNER TO postgres;

--
-- TOC entry 162 (class 1259 OID 58996)
-- Dependencies: 5
-- Name: categoria; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE categoria (
    idcategoria integer NOT NULL,
    categoria character varying(45),
    descripcion character varying(255)
);


ALTER TABLE public.categoria OWNER TO postgres;

--
-- TOC entry 164 (class 1259 OID 59037)
-- Dependencies: 5
-- Name: comentarios; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE comentarios (
    idcomentario integer NOT NULL,
    nombre character varying(50),
    email character varying(45),
    comentario text,
    fecha date,
    hora time with time zone,
    idnoticia integer
);


ALTER TABLE public.comentarios OWNER TO postgres;

--
-- TOC entry 163 (class 1259 OID 59001)
-- Dependencies: 5
-- Name: noticia; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE noticia (
    idnoticia integer NOT NULL,
    titulo character varying(150),
    detalle text,
    idcategoria integer,
    idautor integer,
    fecha date,
    hora time with time zone
);


ALTER TABLE public.noticia OWNER TO postgres;

--
-- TOC entry 165 (class 1259 OID 59050)
-- Dependencies: 5
-- Name: seq_idautor; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE seq_idautor
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_idautor OWNER TO postgres;

--
-- TOC entry 1890 (class 0 OID 0)
-- Dependencies: 165
-- Name: seq_idautor; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('seq_idautor', 1, false);


--
-- TOC entry 166 (class 1259 OID 59052)
-- Dependencies: 5
-- Name: seq_idcategoria; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE seq_idcategoria
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_idcategoria OWNER TO postgres;

--
-- TOC entry 1891 (class 0 OID 0)
-- Dependencies: 166
-- Name: seq_idcategoria; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('seq_idcategoria', 1, false);


--
-- TOC entry 167 (class 1259 OID 59054)
-- Dependencies: 5
-- Name: seq_idcomentario; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE seq_idcomentario
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_idcomentario OWNER TO postgres;

--
-- TOC entry 1892 (class 0 OID 0)
-- Dependencies: 167
-- Name: seq_idcomentario; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('seq_idcomentario', 1, false);


--
-- TOC entry 168 (class 1259 OID 59056)
-- Dependencies: 5
-- Name: seq_idnoticia; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE seq_idnoticia
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_idnoticia OWNER TO postgres;

--
-- TOC entry 1893 (class 0 OID 0)
-- Dependencies: 168
-- Name: seq_idnoticia; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('seq_idnoticia', 1, false);


--
-- TOC entry 1880 (class 0 OID 58991)
-- Dependencies: 161
-- Data for Name: autor; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 1881 (class 0 OID 58996)
-- Dependencies: 162
-- Data for Name: categoria; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 1883 (class 0 OID 59037)
-- Dependencies: 164
-- Data for Name: comentarios; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 1882 (class 0 OID 59001)
-- Dependencies: 163
-- Data for Name: noticia; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 1869 (class 2606 OID 58995)
-- Dependencies: 161 161
-- Name: pk_idautor; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY autor
    ADD CONSTRAINT pk_idautor PRIMARY KEY (idautor);


--
-- TOC entry 1871 (class 2606 OID 59000)
-- Dependencies: 162 162
-- Name: pk_idcategoria; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY categoria
    ADD CONSTRAINT pk_idcategoria PRIMARY KEY (idcategoria);


--
-- TOC entry 1876 (class 2606 OID 59044)
-- Dependencies: 164 164
-- Name: pk_idcomentario; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY comentarios
    ADD CONSTRAINT pk_idcomentario PRIMARY KEY (idcomentario);


--
-- TOC entry 1874 (class 2606 OID 59008)
-- Dependencies: 163 163
-- Name: pk_idnoticia; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY noticia
    ADD CONSTRAINT pk_idnoticia PRIMARY KEY (idnoticia);


--
-- TOC entry 1872 (class 1259 OID 59031)
-- Dependencies: 163
-- Name: fki_idautor; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX fki_idautor ON noticia USING btree (idautor);


--
-- TOC entry 1877 (class 2606 OID 59026)
-- Dependencies: 161 163 1868
-- Name: fk_idautor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY noticia
    ADD CONSTRAINT fk_idautor FOREIGN KEY (idautor) REFERENCES autor(idautor);


--
-- TOC entry 1878 (class 2606 OID 59032)
-- Dependencies: 163 1870 162
-- Name: fk_idcategoria; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY noticia
    ADD CONSTRAINT fk_idcategoria FOREIGN KEY (idcategoria) REFERENCES categoria(idcategoria);


--
-- TOC entry 1879 (class 2606 OID 59045)
-- Dependencies: 163 164 1873
-- Name: fk_idnoticia; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comentarios
    ADD CONSTRAINT fk_idnoticia FOREIGN KEY (idnoticia) REFERENCES noticia(idnoticia);


--
-- TOC entry 1888 (class 0 OID 0)
-- Dependencies: 5
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2013-03-27 15:19:39

--
-- PostgreSQL database dump complete
--

